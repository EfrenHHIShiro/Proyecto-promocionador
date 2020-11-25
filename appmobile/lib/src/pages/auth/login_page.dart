import 'package:appmobile/src/Widgets/RegisterAccount.dart';
import 'package:appmobile/src/Widgets/OrDivider.dart';
import 'package:appmobile/src/Widgets/RoundedButton.dart';
import 'package:appmobile/src/Widgets/SocialIcon.dart';
import 'package:flutter/material.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:appmobile/src/Widgets/ButtonContainer.dart';
import 'package:appmobile/src/Widgets/TextFieldPasswordContiner.dart';

import '../../constants.dart';

class LoginPage extends StatelessWidget {
  
  final TextEditingController emailController = new TextEditingController();
  final TextEditingController passwordController = new TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kPrimaryColor,
      body: Center(
        child: ListView(
          children: <Widget>[
            Column(
              children: <Widget>[
                // Logos
                Row(
                  children: <Widget>[
                    Container(
                        margin: EdgeInsets.only(
                            right: 0, bottom: 35, top: 60, left: 10),
                        child: Text(
                          'Where is the Bar?',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                              fontSize: 40.0,
                              fontFamily: 'Karla',
                              color: HexColor('#FFFFFF')),
                        )),
                  ],
                  mainAxisAlignment: MainAxisAlignment.center,
                ),
                //Email
                TextFormField(
                  controller: emailController,
                  decoration: InputDecoration(
                      icon: Icon(Icons.email), hintText: "Email"),
                  onChanged: (value) {},
                ),
                //Password
                TextFormField(
                  controller: passwordController,
                  decoration: InputDecoration(
                    icon: Icon(Icons.vpn_key),
                    hintText: "Contraseña",
                    suffixIcon: Icon(Icons.remove_red_eye),
                  ),
                ),
                //Recuperar contraseña
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    GestureDetector(
                      onTap: () {
                        Navigator.pushReplacementNamed(context, 'changepass');
                      },
                      child: Text(
                        "¿Se te olvido la contraseña?",
                        style: TextStyle(color: kTextfieldColor),
                      ),
                    ),
                  ],
                ),
                // Button Iniciar Sesion
                ButtonContainer(
                  text: "Iniciar Sesion",
                  onPressed: () {
                    Navigator.pushReplacementNamed(context, 'home');
                  },
                ),
                // Divisor
                OrDiviser(),
                //Login redes
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    SocialIcon(
                      iconSrc: "assets/images/google.svg",
                      press: () {},
                    ),
                    SocialIcon(
                      iconSrc: "assets/images/facebook.svg",
                      press: () {},
                    ),
                  ],
                ),
                RegisterAccount(),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
