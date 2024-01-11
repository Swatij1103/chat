import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';
function App() {
  const steps = [
    {
      id : '1',
      message: 'Hi, Welcome to Ontrans! How can I help you ?',
      trigger:'options',
    },
    {
      id:'options',
      message:'Choose option from below queries',
      trigger:'choose',
    },
    {
      id:'choose',
      options:[
        {value:'Delivery', label:'Delivery', trigger: "Del"},
        {value:'Company Details', label:'Company Details', trigger: "Company_det"},
        {value:'Shipment Tracking ', label:'Shipment Tracking', trigger: "Shipment_track"},
        {value:'Customer Support', label:'Customer Support', trigger: "Cust_supp"},
      ],
    },

    {
      id:"Del",
      message:"Please choose the required delivery option to get the information on",
      trigger:"del_options",
    },

    {
      id:'del_options',
      options:[
        {value:'1', label:'Home to Port', trigger: "HTP"},
        {value:'2', label:'Home to Home ', trigger: "HTH"},
        {value:'3 ', label:'Port to Port', trigger: "PTP"},
        {value:'4', label:'Port to Home', trigger: "PTH"},
        {value:'5', label:'Others', trigger: "Other"},
      ],
    },

    {
      id:"HTH",
      message:"This term emphasizes the entire logistics process from the origin (home or supplier) to the final destination (home or buyer).",
      end:true,
    },

    {
      id:"HTP",
      message:"The term is commonly used in the context of international shipping, where goods need to be transported from their initial location to a specific port for export",
      end:true,
    },

    {
      id:"PTP",
      message:"This term is commonly used in the context of international shipping, where cargo is moved from the port of origin to the destination port.",
      end:true,
    },

    {
      id:"PTH",
      message:" it might refer to a shipping arrangement where goods are transported from a port directly to the final destination, which could be a customer's home.",
      end:true,
    },

    {
      id:"Other",
      message:"There are several ways to transport please refer to ou knowledge page where the proper information is mentioned. Thankyou!!",
      end:true,
    },

    {
      id:"Company_det",
      message:"Ontrans is a logistic company which aims in providing fast , reliable and affordable Shipping services for our clients! To know more about us please visit our about us page above in the navigation bar. Thankyou!",
      end : true,
    },

    {
      id:"Shipment_track",
      message:"Please visit the link here www.google.com to know about you shipment detail. Thankyou for contacting us!",
      end:true,
    },

    {
      id:"Cust_supp",
      message:"For customer support you can contact us through this whatsapp number given here - 8456645666 or you can send us your query using our contact us page in the navigation bar. Thankyou for reaching out!",
      end:true,
    },

  ]
   
  
  
  return (
     <>
  <Segment floated="right">
     <ChatBot steps={steps}/>

    </Segment>
    </>
  );
}

export default App;
