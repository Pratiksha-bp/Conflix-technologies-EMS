function Table({user}){
    return (
        <>
        {user.map((i)=>{
            const{user_id , user_name, user_password , user_mobile , user_email}=i;

            function demo(v){
              let str="";
              let str2=str.concat(v);
              for(let v=0;v<str2.length;v++){
                  str=str+"*";
              }
              return str;
          }

            return(
              <>
              <tr>
                <td>{user_id}</td>
                <td>{user_name}</td>
                <td>{demo(user_password)}</td>
                <td>{user_mobile}</td>
                <td>{user_email}</td>
              </tr>
              </>  
            );
        })}
         </>
    );
}
export default Table;