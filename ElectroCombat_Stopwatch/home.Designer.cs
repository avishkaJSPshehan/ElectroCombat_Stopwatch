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
            this.team_one_panel = new System.Windows.Forms.Panel();
            this.team_two_panel = new System.Windows.Forms.Panel();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.team_one_panel.SuspendLayout();
            this.team_two_panel.SuspendLayout();
            this.SuspendLayout();
            // 
            // watch_lb
            // 
            this.watch_lb.Anchor = System.Windows.Forms.AnchorStyles.None;
            this.watch_lb.AutoSize = true;
            this.watch_lb.BackColor = System.Drawing.Color.Transparent;
            this.watch_lb.Font = new System.Drawing.Font("DS-Digital", 400.2F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.watch_lb.Location = new System.Drawing.Point(42, 184);
            this.watch_lb.Name = "watch_lb";
            this.watch_lb.Size = new System.Drawing.Size(1785, 661);
            this.watch_lb.TabIndex = 0;
            this.watch_lb.Text = "00:00";
            this.watch_lb.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // team_one_panel
            // 
            this.team_one_panel.BackColor = System.Drawing.Color.GreenYellow;
            this.team_one_panel.Controls.Add(this.label1);
            this.team_one_panel.Location = new System.Drawing.Point(1, 1);
            this.team_one_panel.Name = "team_one_panel";
            this.team_one_panel.Size = new System.Drawing.Size(1018, 1101);
            this.team_one_panel.TabIndex = 1;
            // 
            // team_two_panel
            // 
            this.team_two_panel.BackColor = System.Drawing.Color.GreenYellow;
            this.team_two_panel.Controls.Add(this.label2);
            this.team_two_panel.Location = new System.Drawing.Point(1019, 1);
            this.team_two_panel.Name = "team_two_panel";
            this.team_two_panel.Size = new System.Drawing.Size(1135, 1169);
            this.team_two_panel.TabIndex = 2;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Playbill", 72F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(368, 384);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(229, 363);
            this.label1.TabIndex = 0;
            this.label1.Text = "Player\r\nOne\r\nReady";
            this.label1.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Playbill", 72F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.Location = new System.Drawing.Point(328, 384);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(229, 363);
            this.label2.TabIndex = 1;
            this.label2.Text = "Player\r\nTwo\r\nReady";
            this.label2.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // home
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(1920, 1102);
            this.Controls.Add(this.team_two_panel);
            this.Controls.Add(this.team_one_panel);
            this.Controls.Add(this.watch_lb);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "home";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "ElectroCombat";
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.Load += new System.EventHandler(this.home_Load);
            this.KeyDown += new System.Windows.Forms.KeyEventHandler(this.home_KeyDown);
            this.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.home_KeyPress);
            this.team_one_panel.ResumeLayout(false);
            this.team_one_panel.PerformLayout();
            this.team_two_panel.ResumeLayout(false);
            this.team_two_panel.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label watch_lb;
        private System.Windows.Forms.Panel team_one_panel;
        private System.Windows.Forms.Panel team_two_panel;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
    }
}

