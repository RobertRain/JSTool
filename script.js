function __(){var e=document.getElementById("code")
e.value=packer.pack(e.value,!0,!1)}function _$(){var a=document.getElementById("code")
a.value=eval(a.value.replace(/^eval/,""))}function $_(){var e=document.getElementById("code"),o={part_variable_identifier_obfuscate:1,global_variable_identifier_obfuscate:1,part_function_identifier_obfuscate:1,global_function_identifier_obfuscate:1,member_expression_encode:1,numberic_literal_encode:1,binary_express_obfuscate:1,boolean_encode:1,json_encode:1,regexp_encode:1,string_unicode_encode:1,assignment_junk_code:1,zombie_code:1,eval_encode:1,control_flow:1,string_reverse:1,comma_operator:1,string_array:1,string_array_encode:1,vm_execute:1,ast_execute:1,no_beautifier:1,tamper_proof:1,comments:1,compress:1,reserved_word:[]}
$.ajax({url:"https://www.jshaman.com:20443/obfuscate/",dataType:"json",data:{javascript_code:e.value,options:o,secret_key:"free"},method:"POST",error:function(e,o,a){alert("Error")}}).done(function(o){0==o.state&&(e.value=o.content)}).fail(function(){alert("failed")})}