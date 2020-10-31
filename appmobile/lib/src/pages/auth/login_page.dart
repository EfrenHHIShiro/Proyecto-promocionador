import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:appmobile/src/Widgets/ButtonContainer.dart';
import 'package:appmobile/src/Widgets/TextFieldPasswordContiner.dart';
import 'package:appmobile/src/Widgets/TextFieldContainer.dart';

import '../../constants.dart';

class LoginPage extends StatelessWidget {
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
                      margin: EdgeInsets.only(right: 30, bottom: 60, top: 80),
                      child:
                          SvgPicture.asset('assets/images/logo_icon_git.svg'),
                    ),
                    Container(
                        margin: EdgeInsets.only(right: 30, bottom: 60, top: 80),
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
                TextFieldContainer(
                  text: "Email",
                  icon: Icons.alternate_email,
                ),
                //Password
                TextFieldPasswordContainer(
                  text: "Contraseña",
                  icon: Icons.vpn_key,
                  suffixIcon: Icons.remove_red_eye,
                ),
                // Button Iniciar Sesion
                ButtonContainer(
                  text: "Iniciar Sesion",
                  onPressed: () {
                    Navigator.pushReplacementNamed(context, 'home');
                  },
                ),
                // Divisor
                Divider(
                  height: 100.0,
                  color: kDividerColor,
                  thickness: 2.0,
                  indent: 30.0,
                  endIndent: 30.0,
                ),
                // Recuperar contraseña
                Container(
                  margin: EdgeInsets.only(bottom: 50),
                  child: Text(
                    "¿Se te olvido tu contraseña?",
                    style: TextStyle(
                      color: kTextWhiteColor,
                      fontWeight: FontWeight.bold,
                      fontSize: 15.0,
                    ),
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
