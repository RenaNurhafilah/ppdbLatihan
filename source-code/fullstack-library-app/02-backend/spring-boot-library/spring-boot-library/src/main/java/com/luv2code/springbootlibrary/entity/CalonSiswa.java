package com.luv2code.springbootlibrary.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "calon_siswa")
@Data
public class CalonSiswa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "namaAyah")
    private String namaAyah;

    @Column(name = "noTelephone")
    private String noTelephone;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;
}
