define("ace/theme/mono_industrial",["require","exports","module","ace/lib/dom"],function(a,b,c){b.isDark=!0,b.cssClass="ace-mono-industrial",b.cssText=".ace-mono-industrial .ace_editor {  border: 2px solid rgb(159, 159, 159);}.ace-mono-industrial .ace_editor.ace_focus {  border: 2px solid #327fbd;}.ace-mono-industrial .ace_gutter {  background: #e8e8e8;  color: #333;}.ace-mono-industrial .ace_print_margin {  width: 1px;  background: #e8e8e8;}.ace-mono-industrial .ace_scroller {  background-color: #222C28;}.ace-mono-industrial .ace_text-layer {  cursor: text;  color: #FFFFFF;}.ace-mono-industrial .ace_cursor {  border-left: 2px solid #FFFFFF;}.ace-mono-industrial .ace_cursor.ace_overwrite {  border-left: 0px;  border-bottom: 1px solid #FFFFFF;} .ace-mono-industrial .ace_marker-layer .ace_selection {  background: rgba(145, 153, 148, 0.40);}.ace-mono-industrial .ace_marker-layer .ace_step {  background: rgb(198, 219, 174);}.ace-mono-industrial .ace_marker-layer .ace_bracket {  margin: -1px 0 0 -1px;  border: 1px solid rgba(102, 108, 104, 0.50);}.ace-mono-industrial .ace_marker-layer .ace_active_line {  background: rgba(12, 13, 12, 0.25);}.ace-mono-industrial .ace_marker-layer .ace_selected_word {  border: 1px solid rgba(145, 153, 148, 0.40);}       .ace-mono-industrial .ace_invisible {  color: rgba(102, 108, 104, 0.50);}.ace-mono-industrial .ace_keyword {  color:#A39E64;}.ace-mono-industrial .ace_keyword.ace_operator {  color:#A8B3AB;}.ace-mono-industrial .ace_constant {  color:#E98800;}.ace-mono-industrial .ace_constant.ace_numeric {  color:#E98800;}.ace-mono-industrial .ace_invalid {  color:#FFFFFF;background-color:rgba(153, 0, 0, 0.68);}.ace-mono-industrial .ace_fold {    background-color: #A8B3AB;    border-color: #FFFFFF;}.ace-mono-industrial .ace_support.ace_function {  color:#588E60;}.ace-mono-industrial .ace_comment {  color:#666C68;background-color:#151C19;}.ace-mono-industrial .ace_variable.ace_language {  color:#648BD2;}.ace-mono-industrial .ace_entity.ace_other.ace_attribute-name {  color:#909993;}.ace-mono-industrial .ace_entity.ace_name {  color:#5778B6;}.ace-mono-industrial .ace_entity.ace_name.ace_function {  color:#A8B3AB;}.ace-mono-industrial .ace_markup.ace_underline {    text-decoration:underline;}";var d=a("../lib/dom");d.importCssString(b.cssText,b.cssClass)})