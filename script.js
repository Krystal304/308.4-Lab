        // Part 1:
        // what I do
        // Loop through the characters of a given CSV string.
        // Loop through the characters of a given CSV string.
        // Store each “cell” of data in a variable.
        // When you encounter a comma, move to the next cell.
        // When you encounter the “\r\n” sequence, move to the next “row.”
        // Log each row of data.
        // You do not need to format the data, the following works well.
        // console.log(cell1, cell2, cell3, cell4);

        // what I do;
        // 4 cells per row
        // \n escape character
        // cells separated by commas
        // \n new line
        // has to be loop
        // input is a string, string are iterable
        // last row has no \n
        // // console.log(cell1, cell2, cell3, cell4);


        // variable
        // let string = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

        // let cell = '';
        // let row = '';

        // for(let i in string) {
        //     switch (string[i]) {
        //         case ',':
        //             row = row + cell + ' ';
        //             cell = ''
        //             break;
        //              case '\n':
        //             row = row + cell;
        //             cell = '';
        //             console.log(row)
        //                 row = ''
                  
        //             break;
        //         default:
        //             cell += string[i];
        //             break;
        //     }
        //     if (i == string.length - 1){
        //         row += cell
        //         console.log(row)
        //     }

        // }





            // Working with other data
            // variable
    
            // let string ='Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232'
            //     let cell = '';
            //     let row = '';
            //             for(let i in string){
            //                 switch(string[i]){
            //                 case ',':
            //             row = row + cell + ' ';
            //              cell = ''
            //              break;
            //             case '\n':
            //                 row = row + cell;
            //                  cell = '';
            //             console.log(row)
            //              row = ''
            //             break;
            //         default:
            //             cell += string[i];
            //             break;
            //     }
            //             if (i == string.length - 1){
            //                  row += cell
            //             console.log(row)
            //     }
            // }
            

                    // Part 2: Expanding Functionality
                    // Begin with the following task:
                    // Declare a variable that stores the number of columns in each row of data within the CSV.
                    // Instead of hard-coding four columns per row, expand your code to accept any number of columns.
                    // This should be calculated dynamically based on the first row of data.

                    // For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. 
                    // You can safely assume that all rows that follow will contain the same number of entries per row.

                    // After you have implemented the above:
                    // Store your results in a two-dimensional array.
                    // Each row should be its own array, with individual entries for each column.
                    // Each row should be stored in a parent array, with the heading row located at index 0.
                    // Cache this two-dimensional array in a variable for later use.

            // Variable
            // ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry
            //  Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

            // let string = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'

            // let cell = ' ';

            // let row = ' ';

        //     let cell = '';
        // let row = '';

        // for(let i in string) {
        //     switch (string[i]) {
        //         case ',':
        //             row = row + cell + ' ';
        //             cell = ''
        //             break;
        //              case '\n':
        //             row = row + cell;
        //             cell = '';
        //             console.log(row)
        //                 row = ''
                  
        //             break;
        //         default:
        //             cell += string[i];
        //             break;
        //     }
        //     if (i == string.length - 1){
        //         row += cell
        //         console.log(row)
        //     }


        // }
           


                // part 3 Transforming data
                // For each row of data in the result array produced by your code above,
                //  create an object where the key of each value is the heading for that value’s column.
                // Convert these keys to all lowercase letters for consistency.
                // Store these objects in an array, in the order that they were originally listed.
                // Since the heading for each column will be stored in the object keys, you do not need
                // to create an object for the heading row itself.

                let data = [
                ["ID", "Name", "Occupation", "Age"],
                ["42", "Bruce", "Knight", "41"],
                ["57", "Bob", "Fry Cook", "19"],
                ["63", "Blaine", "Quiz Master", "58"],
                ["98", "Bill", "Doctor’s Assistant", "26"]
        ];


                // heading
                let heading = data[0].map(h => h.toLowerCase());
              
                let rows = data.slice(1);

                let array = []

                rows.forEach(row=> {
                        let obj = {};

                heading.forEach((name, index, ) => {
                        obj[name] = row[index] 
                
 
                        });
                        array.push(obj);

                });
                console.log (array);


                



                




            
