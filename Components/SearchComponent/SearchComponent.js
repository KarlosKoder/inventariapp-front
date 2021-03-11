import React from 'react'
import { Form, FormControl, Button } from "react-bootstrap";
import styles from "../../styles/searchInput.module.scss"

function SearchComponent() {
    return (
        <div>
            
      <FormControl  type="text" placeholder="&#xf002; Busca tus productos"  className={`fa fa-plus mr-sm-2 ${styles.search} }`} />
     
  
            
        </div>
    )
}

export default SearchComponent
