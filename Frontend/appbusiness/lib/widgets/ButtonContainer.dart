import 'package:appbusiness/constants/color_contstants.dart';
import 'package:flutter/material.dart';



class ButtonContainer extends StatelessWidget {
  final String text;
  final Function onPressed;
  const ButtonContainer({
    Key key,
    this.text,
    this.onPressed
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      margin: EdgeInsets.only(top: 40, bottom: 30),
      width: size.width * 0.8,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(80),
        child: FlatButton(
          padding: EdgeInsets.symmetric(vertical: 20, horizontal: 40),
          color: kButtonColor,
          onPressed: onPressed,
          child: Text(
            text,
            style: TextStyle(
              color: kPrimaryColor,
              fontSize: 16
            ),
          ),
        ),
      ),
    );
  }
}