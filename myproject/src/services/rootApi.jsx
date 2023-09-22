import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
  endpoints: (builder) => ({
    getSingleProd: builder.query({
      query: (id) =>{
        // console.log(id)
        return {
            url : `newshop/singelprodview/${id}`,
            method : 'GET'
        }
      }}),
      getProdView : builder.query({
        query : () =>{
          return {
            url : 'newshop/categorywiseview/',
            method : 'GET'
          }
        }
      }),
      getAllprodutview : builder.query({
        query : ()=>{
          return {
            url : 'newshop/prod/',
            method : 'GET'
          }
        }
      }),
      getLogin : builder.mutation({
        query: (data)=>{
          return {
            url : 'cus/authlogin/',
            method : 'POST',
            body:data,
            headers :{
              'Content-type':'application/json',
          }            
          }
        }
      }),
      setSessionToken : builder.mutation({
        query : (data)=>{
          return {
            url : "newshop/settokensession/",
            method : "POST",
            body : data,
            headers :{
              'Content-type':'application/json',
            }
          }
        }
        
      }),
      getSessionToken : builder.query({
        query : ()=>{
          return {
            url : "newshop/gettokensession/",
            method : "GET",
            headers :{
              'Content-type':'application/json',
            }
          }
          
        }
      })

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetSingleProdQuery,useGetProdViewQuery,useGetAllprodutviewQuery,useGetLoginMutation,useSetSessionTokenMutation,useGetSessionTokenQuery } = rootApi