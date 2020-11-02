import 'package:appbusiness/constants/color_contstants.dart';
import 'package:appbusiness/widgets/ButtonContainer.dart';
import 'package:appbusiness/widgets/TextFieldContainer.dart';
import 'package:appbusiness/widgets/TextFieldPasswordContainer.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      backgroundColor: kPrimaryColor,
      appBar: null,
      body: Center(
        child: ListView(
          children: <Widget>[
            Column(
              children: <Widget>[
                // Email
                TextFieldContainer(
                  text: "Email",
                  icon: Icons.email,
                ),
                // Password 
                TextFieldPasswordContainer(
                  text:"Password",
                  icon: Icons.vpn_key,
                  suffixIcon: Icons.remove_red_eye,
                ),
                 // Recuperar contraseña
                Container(
                  margin: EdgeInsets.only(left: 110,bottom: 30),
                  child: Text(
                    "¿Se te olvido tu contraseña?",
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      color: kTextWhiteColor,
                      fontWeight: FontWeight.bold,
                      fontSize: 15.0,
                    ),
                  ),
                ),
                // Button Iniciar session 
                ButtonContainer(
                  text: "Iniciar session",
                  onPressed: (){
                    Navigator.pushReplacementNamed(context, 'home');
                  },
                ),
                Container(                  
                  margin: EdgeInsets.only(top: 50),
                  width: size.width * 0.8,
                  child: Text(
                    "By continuing, you agree to Pinterest's",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w400,
                      color: kTextWhiteColor
                    ),
                  )
                ),
                Container(
                  margin: EdgeInsets.only(bottom: 80),
                  width: size.width * 0.8,
                  child: Text(
                    "Terms of Service, Privacy policy.",
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.w600,
                      color: kTextWhiteColor
                    ),
                  )
                ),
                Text(
                  "¿Aún no estás en WhereisMyBar? Regístrate",
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w600,
                    color: kTextWhiteColor
                  ),
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}