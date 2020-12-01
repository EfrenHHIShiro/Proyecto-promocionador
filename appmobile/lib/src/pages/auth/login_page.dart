import 'package:appmobile/src/Widgets/RegisterAccount.dart';
import 'package:appmobile/src/Widgets/OrDivider.dart';
import 'package:appmobile/src/Widgets/RoundedButton.dart';
import 'package:appmobile/src/Widgets/SocialIcon.dart';
import 'package:flutter/material.dart';
import 'package:hexcolor/hexcolor.dart';
import 'package:appmobile/src/Widgets/ButtonContainer.dart';
import 'package:appmobile/models/loginRequest.dart';

import '../../constants.dart';

class LoginPage extends StatelessWidget {
  Future<LoginResponse> _futureJwt;
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
                Container(
                    margin: EdgeInsets.all(35),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(90),
                    ),
                    child: TextFormField(
                      validator: (emailController) {
                        if (emailController.contains("@")) {
                          if (emailController.isEmpty) {
                            return 'Porfavor llena el campo';
                          }
                          return null;
                        } else
                          return 'Porfavor solo acepta correo falto el @';
                      },
                      keyboardType: TextInputType.emailAddress,
                      controller: emailController,
                      decoration: InputDecoration(
                          border: OutlineInputBorder(
                            // width: 0.0 produces a thin "hairline" border
                            borderRadius:
                                BorderRadius.all(Radius.circular(90.0)),
                            //borderSide: BorderSide(color: Colors.white24)
                            borderSide: const BorderSide(),
                          ),
                          suffixIcon: Icon(Icons.email),
                          hintText: "Email"),
                      onChanged: (value) {},
                    )),

                //Password
                Container(
                  margin: EdgeInsets.all(35),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(90),
                  ),
                  child: TextFormField(
                    validator: (passwordController) {
                      if (passwordController.isEmpty) {
                        return 'Porfavor llena el campo';
                      }
                      return null;
                    },
                    obscureText: true,
                    controller: passwordController,
                    decoration: InputDecoration(
                      border: OutlineInputBorder(
                        // width: 0.0 produces a thin "hairline" border
                        borderRadius: BorderRadius.all(Radius.circular(90.0)),
                        //borderSide: BorderSide(color: Colors.white24)
                        borderSide: const BorderSide(),
                      ),
                      prefixIcon: Icon(Icons.vpn_key),
                      hintText: "Contraseña",
                      suffixIcon: Icon(Icons.remove_red_eye),
                    ),
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
                    _futureJwt = loginState(
                        emailController.text, passwordController.text);
                    _futureJwt.then((LoginResponse login) {
                      (login.status == true)
                          ? Navigator.pushReplacementNamed(context, 'home')
                          : print("todo mal");
                    });
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
            )
          ],
        ),
      ),
    );
  }
}
