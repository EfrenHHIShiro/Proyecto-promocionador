import 'package:flutter/material.dart';

import '../constants.dart';

class ButtonContainer extends StatelessWidget {
  final String text;
  final Function onPressed;
  const ButtonContainer({Key key, this.text, this.onPressed}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      margin: EdgeInsets.symmetric(vertical: 20),
      width: size.width * 0.8,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(29),
        child: FlatButton(
          padding: EdgeInsets.symmetric(vertical: 20, horizontal: 5),
          color: kButtonColor,
          onPressed: onPressed,
          child: Text(
            text,
            style: TextStyle(color: kPrimaryColor),
          ),
        ),
      ),
    );
  }
}
