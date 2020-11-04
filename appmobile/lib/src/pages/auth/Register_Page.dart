import 'package:appmobile/src/Widgets/AlreadyAccount.dart';
import 'package:appmobile/src/Widgets/OrDivider.dart';
import 'package:appmobile/src/Widgets/RoundedButton.dart';
import 'package:appmobile/src/Widgets/SocialIcon.dart';
import 'package:flutter/material.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:appmobile/src/Widgets/ButtonContainer.dart';
import 'package:appmobile/src/Widgets/TextFieldPasswordContiner.dart';

import '../../constants.dart';

class RegisterPage extends StatelessWidget {
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
                            right: 0, bottom: 35, top: 50, left: 10),
                        child: Text(
                          'BarUser',
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
                RoundedInputField(
                  hintText: "Email",
                  onChanged: (value) {},
                ),
                //Password
                TextFieldPasswordContainer(
                  text: "Contraseña",
                  icon: Icons.vpn_key,
                  suffixIcon: Icons.remove_red_eye,
                ),
                //Confirmed Password
                TextFieldPasswordContainer(
                  text: "Confirmar Contraseña",
                  icon: Icons.vpn_key,
                ),
                //Recuperar contraseña
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    GestureDetector(
                      onTap: () {},
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
                AlreadyAccount(),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
