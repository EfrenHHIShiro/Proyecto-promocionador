import 'package:flutter/material.dart';

import '../constants.dart';

class AlreadyAccount extends StatelessWidget {
  final bool login;
  final Function press;
  const AlreadyAccount({
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
          "¿Ya eres usuario?",
          style: TextStyle(color: kTextfieldColor),
        ),
        GestureDetector(
          onTap: () {
            Navigator.pushReplacementNamed(context, 'login');
          },
          child: Text(
            " Iniciar sesión",
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
