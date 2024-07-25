using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ElectroCombat_Stopwatch
{
    public partial class home : Form
    {
        System.Timers.Timer timer;
        int h, m, s, ms;
        bool status = false;
        

        private void home_KeyPress(object sender, KeyPressEventArgs e)
        {
            
        }

        private void home_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.KeyCode == Keys.Space)
            {
                if(status == false)
                {
                    timer.Start();
                    this.BackColor = System.Drawing.Color.Green;
                    status = true;
                }
                else if(status == true)
                {
                    timer.Stop();
                    this.BackColor = System.Drawing.Color.Red;
                    status = false;
                }
                
            }
        }

        private void home_Load(object sender, EventArgs e)
        {
            timer = new System.Timers.Timer();
            timer.Interval = 1;
            timer.Elapsed += OnTimeEvent;
        }

        private void OnTimeEvent(object sender, EventArgs e)
        {
            Invoke(new Action(() =>
            {
                ms += 1;
                if(ms == 63)
                {
                    ms = 0;
                    s += 1;
                }
                if(s == 59)
                {
                    s = 0;
                    m += 1;
                }

                watch_lb.Text = string.Format("{0}:{1}", m.ToString().ToString().PadLeft(2, '0'), s.ToString().ToString().PadLeft(2, '0'));
            }));
        }

        public home()
        {
            InitializeComponent();
        }
    }
}
