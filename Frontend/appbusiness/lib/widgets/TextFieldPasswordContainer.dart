import 'package:appbusiness/constants/color_contstants.dart';
import 'package:flutter/material.dart';


class TextFieldPasswordContainer extends StatefulWidget {
  final String text;
  final IconData icon;
  final IconData suffixIcon;
  TextFieldPasswordContainer({
    Key key,
    this.text,
    this.icon,
    this.suffixIcon
  }) : super(key: key);

  @override
  _TextFieldPasswordContainerState createState() => _TextFieldPasswordContainerState();
}

class _TextFieldPasswordContainerState extends State<TextFieldPasswordContainer> {
   // Initially password is obscure
  bool _obscureText = true;

  String _password;

  // Toggles the password show status
  void _toggle() {
    setState(() {
      _obscureText = !_obscureText;
    });
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      margin: EdgeInsets.only(top: 20, bottom:20),
      padding: EdgeInsets.symmetric(horizontal: 20, vertical: 5),
      width: size.width * 0.8,
      decoration: BoxDecoration(
        border: Border.all(color: kTextfieldColor),
        borderRadius: BorderRadius.circular(80),
      ),
      child: TextField(
        obscureText: _obscureText,
        style: TextStyle(
          color: kTextfieldColor,
        ),
        decoration: InputDecoration(
          icon: Icon(
            widget.icon,
            color: kTextfieldColor,
          ),
          hintStyle: TextStyle(
            color: kTextfieldColor
          ),
          hintText: widget.text,
          border: InputBorder.none,
          suffixIcon: IconButton(
            icon: Icon(
              widget.suffixIcon,
              color: kTextfieldColor,
            ),
            onPressed: _toggle,
          ),
        )
      ),
    );
  }
}