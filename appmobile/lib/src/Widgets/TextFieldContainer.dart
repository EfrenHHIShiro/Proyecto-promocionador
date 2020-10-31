import 'package:flutter/material.dart';

import '../constants.dart';

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
        color: kTextfieldColor,
        borderRadius: BorderRadius.circular(3),
      ),
      child: TextField(
        decoration: InputDecoration(
          icon: Icon(
            icon,
            color: kPrimaryColor,
          ),
          hintText: text,
          border: InputBorder.none,
        )
      ),
    );
  }
}