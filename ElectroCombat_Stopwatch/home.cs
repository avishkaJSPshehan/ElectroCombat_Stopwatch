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
                    watch_lb.Show();
                    timer.Start();
                    this.BackColor = System.Drawing.Color.Green;
                    team_one_panel.Hide();
                    team_two_panel.Hide();
                    status = true;
                }
                else if(status == true)
                {
                    watch_lb.Show();
                    timer.Stop();
                    this.BackColor = System.Drawing.Color.Orange;
                    team_one_panel.Hide();
                    team_two_panel.Hide();
                    status = false;
                }
                
            }

            else if (e.KeyCode == Keys.Q)
            {
                team_one_panel.Show();
                watch_lb.BackColor = System.Drawing.Color.Transparent;
            }
            else if (e.KeyCode == Keys.P)
            {
                team_two_panel.Show();
                watch_lb.BackColor = System.Drawing.Color.Transparent;
            }

            else if (e.KeyCode == Keys.R)
            {
                watch_lb.Show();
                timer.Stop();
                h = 0; m = 0; s = 0; ms = 0;
                watch_lb.Text = "00:00";
                this.BackColor = System.Drawing.Color.Green;
                team_one_panel.Hide();
                team_two_panel.Hide();
                status = true;
            }
        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void team_one_state_Click(object sender, EventArgs e)
        {

        }

        private void team_one_ready_pic_Click(object sender, EventArgs e)
        {

        }

        private void team_two_panel_Paint(object sender, PaintEventArgs e)
        {

        }

        private void home_Load(object sender, EventArgs e)
        {
            timer = new System.Timers.Timer();
            timer.Interval = 1;
            timer.Elapsed += OnTimeEvent;
            team_one_panel.Hide();
            team_two_panel.Hide();
            watch_lb.Hide();
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

                if (m == 3)
                {
                    timer.Stop();
                    this.BackColor = System.Drawing.Color.Red;
                }

            }));

            
        }

        public home()
        {
            InitializeComponent();
        }
    }
}
