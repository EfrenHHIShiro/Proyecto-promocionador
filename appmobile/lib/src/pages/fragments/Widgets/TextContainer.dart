import 'package:flutter/material.dart';

class TextContainer extends StatelessWidget {
  final String title;
  final String info;
  const TextContainer({
    Key key,
    this.title,
    this.info,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Container(
            margin: EdgeInsets.only(top: 10),
            child: Text(
              title,
              style: TextStyle(
                fontSize: 18,
              ),
            ),
          ),
          Container(
              margin: EdgeInsets.only(top: 3),
              child: TextFormField(
                //enabled: false, 
                enableInteractiveSelection: false,
                 focusNode: new AlwaysDisabledFocusNode(),
                decoration: InputDecoration(
                    border: OutlineInputBorder(
                      // width: 0.0 produces a thin "hairline" border
                      borderRadius: BorderRadius.all(Radius.circular(10)),
                      //borderSide: BorderSide(color: Colors.white24)
                      borderSide: const BorderSide(),
                    ),
                    hintText: info),
                onChanged: (value) {},
              ))
        ],
      ),
    );
  }
}
class AlwaysDisabledFocusNode extends FocusNode {
  @override
  bool get hasFocus => false;
}