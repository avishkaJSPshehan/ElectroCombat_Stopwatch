﻿namespace ElectroCombat_Stopwatch
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
            this.team_one_state = new System.Windows.Forms.Label();
            this.team_two_state = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // watch_lb
            // 
            this.watch_lb.AutoSize = true;
            this.watch_lb.BackColor = System.Drawing.Color.Transparent;
            this.watch_lb.Font = new System.Drawing.Font("DS-Digital", 400.2F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.watch_lb.Location = new System.Drawing.Point(99, 180);
            this.watch_lb.Name = "watch_lb";
            this.watch_lb.Size = new System.Drawing.Size(1785, 661);
            this.watch_lb.TabIndex = 0;
            this.watch_lb.Text = "00:00";
            this.watch_lb.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // team_one_state
            // 
            this.team_one_state.AutoSize = true;
            this.team_one_state.BackColor = System.Drawing.Color.Transparent;
            this.team_one_state.Font = new System.Drawing.Font("Robus", 150F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.team_one_state.ForeColor = System.Drawing.Color.Green;
            this.team_one_state.Location = new System.Drawing.Point(240, 9);
            this.team_one_state.Name = "team_one_state";
            this.team_one_state.Size = new System.Drawing.Size(593, 250);
            this.team_one_state.TabIndex = 1;
            this.team_one_state.Text = "Ready";
            // 
            // team_two_state
            // 
            this.team_two_state.AutoSize = true;
            this.team_two_state.BackColor = System.Drawing.Color.Transparent;
            this.team_two_state.Font = new System.Drawing.Font("Robus", 150F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.team_two_state.ForeColor = System.Drawing.Color.Green;
            this.team_two_state.Location = new System.Drawing.Point(1157, 9);
            this.team_two_state.Name = "team_two_state";
            this.team_two_state.Size = new System.Drawing.Size(593, 250);
            this.team_two_state.TabIndex = 2;
            this.team_two_state.Text = "Ready";
            // 
            // home
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1920, 1080);
            this.Controls.Add(this.team_two_state);
            this.Controls.Add(this.team_one_state);
            this.Controls.Add(this.watch_lb);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "home";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "ElectroCombat";
            this.TopMost = true;
            this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
            this.Load += new System.EventHandler(this.home_Load);
            this.KeyDown += new System.Windows.Forms.KeyEventHandler(this.home_KeyDown);
            this.KeyPress += new System.Windows.Forms.KeyPressEventHandler(this.home_KeyPress);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label watch_lb;
        private System.Windows.Forms.Label team_one_state;
        private System.Windows.Forms.Label team_two_state;
    }
}

