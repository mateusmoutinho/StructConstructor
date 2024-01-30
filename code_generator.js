
function generate_declaration(){
    let text = ""
    structs.forEach(struct=>{
            text+="typedef struct{\n";


            text+=`}${struct.name};`
    })
    return text;
}
function generate_code(){
    let text = '';
    text+=generate_declaration();
    return text
}