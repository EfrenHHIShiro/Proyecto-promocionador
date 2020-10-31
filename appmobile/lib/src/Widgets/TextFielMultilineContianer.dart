import 'package:appmobile/src/constants.dart';
import 'package:flutter/material.dart';

class TextFieldMultilineContainer extends StatefulWidget {
  TextFieldMultilineContainer({Key key}) : super(key: key);

  @override
  _TextFieldMultilineContainerState createState() =>
      _TextFieldMultilineContainerState();
}

class _TextFieldMultilineContainerState
    extends State<TextFieldMultilineContainer> {
  final textController = TextEditingController();
  int caracteres = 0;
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
      padding: EdgeInsets.all(8.0),
      decoration: BoxDecoration(
        color: Colors.white12,
        borderRadius: BorderRadius.circular(8.0),
      ),
      width: size.width * 0.8,
      child: TextField(
        controller: textController,
        maxLength: 155,
        decoration: InputDecoration(
          helperStyle: TextStyle(
            color: kTextWhiteColor,
            fontWeight: FontWeight.w600,
          ),
        ),
        style: TextStyle(color: kTextWhiteColor),
        minLines: 4,
        maxLines: 8,
      ),
    );
  }
}
