import React from 'react'
import FileSaver from 'file-saver'
import* as XLSX from 'xlsx';


const ExcelProdPage = ({finaldata}) => {
    console.log('final dats',finaldata)
    const fileType = 'xlsx'
    const exportTocsv=()=>{
        // console.log('ok')
       finaldata.map((item,index)=>{
        // console.log('item',item)
        item['json'] = XLSX.utils.json_to_sheet(item.data)
        // console.log('item',item)  
       })
       const obj = {
        Sheets :{},
        SheetNames : []
       }
       finaldata.map((item,index)=>{
          obj.Sheets[item.category] = item.json,
          obj.SheetNames.push(item.category)
       })
      //  const test = [...obj]
       const xlbuffer = XLSX.write(obj,{bookType:"xlsx",type:"array"})
       const data = new Blob([xlbuffer],{type:fileType})
       FileSaver.saveAs(data,'myfile'+'.xlsx')
    }
  return (
    <div>
      <button className='btn btn-primary' onClick={exportTocsv} >Export to Excel</button>
    </div>
  )
}

export default ExcelProdPage
