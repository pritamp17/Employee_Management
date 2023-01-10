package com.pritam.Employee.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "employee")   // table name
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // id will be automaticlly generated and incremental values will be assigned to id
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;

}
