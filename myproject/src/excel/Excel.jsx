import React,{useEffect,useState} from 'react'
import* as FileSaver  from 'file-saver'
import* as XLSX from 'xlsx';
import {Button} from '@mui/material'

const Excel = ({finaldata}) => {
    // console.log('userDetails',finaldata)
    
    const fileType= 'xlsx'
    const exportTocsv=()=>{
        console.log('ok')
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

        // const productname = XLSX.utils.json_to_sheet(product)
        // const final = XLSX.utils.json_to_sheet(finaldata)
        // const wb = {Sheets:{product:productname,finalda:final},SheetNames:["product","finalda"]}
        // const xlbuffer = XLSX.write(wb,{bookType:"xlsx",type:"array"})
        // const data = new Blob([xlbuffer],{type:fileType})
        // FileSaver.saveAs(data,'myfile'+'.xlsx')

    }
  return (
    <div className='container'>
      <Button onClick={exportTocsv}   className='my-4 '>DownloadFile</Button>
    </div>
  )
}

export default Excel
