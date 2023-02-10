package com.luv2code.springbootlibrary.controller;

import com.luv2code.springbootlibrary.service.CalonSiswaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/calonsiswa")
public class CalonSiswaController {

    private CalonSiswaService calonSiswaService;

    @Autowired
    public CalonSiswaController(CalonSiswaService calonSiswaService) {
        this.calonSiswaService = calonSiswaService;
    }

//    @PutMapping("/update/calonsiswa")
//    public ResponseEntity<Void> updateCalonSiswa(@RequestBody @Valid CalonSiswaCreateRequestDTO dto) {
//        calonSiswaService.
//    }
}
