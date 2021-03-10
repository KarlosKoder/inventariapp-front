import React from 'react'
import { Form, FormControl, Button } from "react-bootstrap";
import styles from "../../styles/searchInput.module.scss"

function SearchComponent() {
    return (
        <div>
            
      <FormControl  type="text" placeholder="&#xf002; Username"  className={`fa fa-plus mr-sm-2 ${styles.fa} }`} />
     
  
            
        </div>
    )
}

export default SearchComponent
