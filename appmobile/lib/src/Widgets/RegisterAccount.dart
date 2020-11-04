import 'package:flutter/material.dart';

import '../constants.dart';

class RegisterAccount extends StatelessWidget {
  final bool login;
  final Function press;
  const RegisterAccount({
    Key key,
    this.login = true,
    this.press,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Text(
          "¿Aún no estás en Where is the Bar?",
          style: TextStyle(color: kTextfieldColor),
        ),
        GestureDetector(
          onTap: () {
            Navigator.pushReplacementNamed(context, 'register');
          },
          child: Text(
            " Registrate",
            style: TextStyle(
              color: kTextfieldColor,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      ],
    );
  }
}
