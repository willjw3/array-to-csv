import React, {useState, useEffect } from 'react';
import { convertArrayToCSV } from 'convert-array-to-csv';
import { moment } from 'moment-timezone';
import './pageStyles.css'

export default function Home() {
    const [reportsDataLoading, setReportsDataLoading] = useState(false);

    const name = "MyFile"

    
    const dataObjects = [
        {
          number: 1,
          first: 'Mark',
          last: 'Otto',
          handle: '@mdo',
        },
        {
          number: 2,
          first: 'Jacob',
          last: 'Thornton',
          handle: ['@fat, the crank', '@boof', '@chuckles', '@jimmy_jam'],
        },
        {
          number: 3,
          first: 'Larry',
          last: 'the Bird',
          handle: ['@twitter, the site'],
        },
      ];

      const final = [];
      const positive = "Yes";
      const negative = "No";
    
      dataObjects.map(element => {
        Object
          .entries(element)
          .map(e => {
            const eObject = {
              [e[0]]: e[1]
            };
            if(Array.isArray(e[1]) && e[1].length > 1){
              return element[Object.keys(eObject)[0]] = Object.values(eObject)[0].join("; ")
            };
            // if (Array.isArray(e[1]) && e[1].length === 1){
            //     return element[Object.keys(eObject)[0]] = Object.values(eObject)[0].join()
            // }

            // !!!! This seems to hinge on what is used as a separator.
            // if(typeof Object.values(eObject)[0] === 'string'){
            //   if(Object.values(eObject)[0].includes(',')){
            //     return element[Object.keys(eObject)[0]] = Object.values(eObject)[0].replace(/,/g, '')
            //   };
            // };
    
            // if(Object.values(eObject)[0] === true){
            //   return element[Object.keys(eObject)[0]] = positive;
            // };
    
            // if(Object.values(eObject)[0] === false){
            //   return element[Object.keys(eObject)[0]] = negative;
            // };
    
            return element;
          }
        );
    
        return final.push(
          {
            number: element.number,
            first: element.first,
            last: element.last,
            handle: element.handle
          }
        );
      });

      const downloadText = (filename, txtContents) => {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        const blob = new Blob([txtContents]);
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      };

      const downloadFile = (name, rawData) => {
        const header = ['number', 'first', 'last', 'handle'];
        const data = convertArrayToCSV(rawData, {
            header,
            separator: ';'
        })
        console.log(data)
        const fileName = `my_file.csv`;
        downloadText(fileName, data);
    
        // if(!isEmpty(data) && !isEmpty(fileName)){
        //   setReportsDataLoading(false);
        // };
      };

      useEffect(() => {
        if (reportsDataLoading) {
            downloadFile(name, final);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [reportsDataLoading]);

    
      console.log(reportsDataLoading)
    

    return (
        <div>
            <div className="container">
                <h1 className="text-success">This is Home</h1>
                <button onClick={() => { 
                    console.log("Download button clicked!")
                    setReportsDataLoading(!reportsDataLoading)
                }}>Download File</button>
            </div>
        </div>
    )
}
