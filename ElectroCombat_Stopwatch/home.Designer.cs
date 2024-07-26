namespace ElectroCombat_Stopwatch
{
    partial class home
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.watch_lb = new System.Windows.Forms.Label();
            this.team_two_state = new System.Windows.Forms.Label();
            this.team_one_ready_pic = new System.Windows.Forms.PictureBox();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            ((System.ComponentModel.ISupportInitialize)(this.team_one_ready_pic)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.SuspendLayout();
            // 
            // watch_lb
            // 
            this.watch_lb.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.watch_lb.AutoSize = true;
            this.watch_lb.BackColor = System.Drawing.Color.Transparent;
            this.watch_lb.Font = new System.Drawing.Font("DS-Digital", 400.2F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.watch_lb.Location = new System.Drawing.Point(100, 184);
            this.watch_lb.Name = "watch_lb";
            this.watch_lb.Size = new System.Drawing.Size(1785, 661);
            this.watch_lb.TabIndex = 0;
            this.watch_lb.Text = "00:00";
            this.watch_lb.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // team_two_state
            // 
            this.team_two_state.AutoSize = true;
            this.team_two_state.BackColor = System.Drawing.Color.Transparent;
            this.team_two_state.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.team_two_state.Font = new System.Drawing.Font("Robus", 150F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.team_two_state.ForeColor = System.Drawing.Color.Green;
            this.team_two_state.Location = new System.Drawing.Point(924, 89);
            this.team_two_state.Name = "team_two_state";
            this.team_two_state.Size = new System.Drawing.Size(593, 250);
            this.team_two_state.TabIndex = 2;
            this.team_two_state.Text = "Ready";
            // 
            // team_one_ready_pic
            // 
            this.team_one_ready_pic.BackColor = System.Drawing.Color.Transparent;
            this.team_one_ready_pic.Image = global::ElectroCombat_Stopwatch.Properties.Resources.Ready_2;
            this.team_one_ready_pic.Location = new System.Drawing.Point(251, 149);
            this.team_one_ready_pic.Name = "team_one_ready_pic";
            this.team_one_ready_pic.Size = new System.Drawing.Size(621, 228);
            this.team_one_ready_pic.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.team_one_ready_pic.TabIndex = 4;
            this.team_one_ready_pic.TabStop = false;
            this.team_one_ready_pic.Click += new System.EventHandler(this.team_one_ready_pic_Click);
            // 
            // pictureBox1
            // 
            this.pictureBox1.BackColor = System.Drawing.Color.Transparent;
            this.pictureBox1.Location = new System.Drawing.Point(-3, -2);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(2080, 1107);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox1.TabIndex = 3;
            this.pictureBox1.TabStop = false;
            // 
            // home
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(1920, 1102);
            this.Controls.Add(this.team_one_ready_pic);
            this.Controls.Add(this.team_two_state);
            this.Controls.Add(this.watch_lb);
            this.Controls.Add(this.pictureBox1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "home";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "ElectroCombat";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.Load += new System.EventHandler(this.home_Load);
            this.KeyDown += new System.Windows.Forms.KeyEventHandler(this.home_KeyDown);
            this.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.home_KeyPress);
            ((System.ComponentModel.ISupportInitialize)(this.team_one_ready_pic)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label watch_lb;
        private System.Windows.Forms.Label team_two_state;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.PictureBox team_one_ready_pic;
    }
}

