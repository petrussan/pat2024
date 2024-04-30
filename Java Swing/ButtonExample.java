import javax.swing.*;
import java.awt.event.*;

public class ButtonExample {

    ButtonExample() {
        JFrame frame = 
        new JFrame("Contoh Frame dengan Button");
    
    JTextField tf1 = new JTextField();
    tf1.setBounds(50, 10, 150, 30);

//    JButton b1 = new JButton("Klik di sini");
    JButton b1 = new JButton("Klik di sini", 
                    new ImageIcon("click.png"));
    b1.setBounds(50, 50, 200, 30);
    b1.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
            tf1.setText("Button di klik");        
        }
    });

    frame.add(b1);
    frame.add(tf1);
    frame.setSize(640, 480);
    frame.setLayout(null);
    frame.setVisible(true);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public static void main(String[] args) {
        new ButtonExample();
    }    
}
