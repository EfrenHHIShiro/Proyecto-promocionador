import 'package:appbusiness/constants/color_contstants.dart';
import 'package:flutter/material.dart';


class TextFieldContainer extends StatelessWidget {
  final String text;
  final IconData icon;
  const TextFieldContainer({
    Key key,
    this.text,
    this.icon,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      margin: EdgeInsets.symmetric(vertical:15),
      padding: EdgeInsets.symmetric(horizontal: 20, vertical: 5),
      width: size.width * 0.8,
      decoration: BoxDecoration(
        border: Border.all(color: kTextfieldColor),
        borderRadius: BorderRadius.circular(80),
      ),
      child: TextField(
        style: TextStyle(
          color: kTextfieldColor,
        ),
        decoration: InputDecoration(
          icon: Icon(
            icon,
            color: kTextfieldColor,
          ),
          hintStyle: TextStyle(color: kTextfieldColor),
          labelStyle: TextStyle(color: kTextfieldColor),
          hintText: text,
          border: InputBorder.none,
        )
      ),
    );
  }
}