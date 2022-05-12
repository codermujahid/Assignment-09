 

 const studentData = [
     {
         name : 'Mujahidul islam',
         age : 27,
         roll : 2,
         seshons : 'Eight',
         gender : 'Mali', 
         seshons_fee : 900 
     },
     {
         name : 'Masud rana',
         age : 22,
         roll : 12,
         seshons : 'Five',
         gender : 'Mali', 
         seshons_fee : 1900 
     },
     {
         name : 'Asraful islam',
         age : 27,
         roll : 2,
         seshons : 'six',
         gender : 'Mali', 
         seshons_fee : 4300 
     },
     {
         name : 'Fariha',
         age : 27,
         roll : 2,
         seshons : 'Eight',
         gender : 'Female', 
         seshons_fee : 5400 
     },
     {
         name : 'dealwar Hossin',
         age : 27,
         roll : 2,
         seshons : 'Eight',
         gender : 'Mali', 
         seshons_fee : 900 
     },
     {
         name : 'shahuinur islam',
         age : 27,
         roll : 2,
         seshons : 'Eight',
         gender : 'Mali', 
         seshons_fee : 900 
     },
     
     
 ];

 console.log(JSON.stringify(studentData));

 let data =`[{"name":"Mujahidul islam","age":27,"roll":2,"seshons":"Eight","gender":"Mali","seshons_fee":900},{"name":"Mujahidul islam","age":27,"roll":2,"seshons":"Eight","gender":"Mali","seshons_fee":900},{"name":"Mujahidul islam","age":27,"roll":2,"seshons":"Eight","gender":"Mali","seshons_fee":900},{"name":"Mujahidul islam","age":27,"roll":2,"seshons":"Eight","gender":"Mali","seshons_fee":900},{"name":"Mujahidul islam","age":27,"roll":2,"seshons":"Eight","gender":"Mali","seshons_fee":900},{"name":"Mujahidul islam","age":27,"roll":2,"seshons":"Eight","gender":"Mali","seshons_fee":900}]`

 console.log(JSON.parse(data));