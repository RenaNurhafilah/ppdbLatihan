package com.luv2code.springbootlibrary.service;

import com.luv2code.springbootlibrary.dao.CalonSiswaRepository;
import com.luv2code.springbootlibrary.entity.CalonSiswa;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@Transactional
public class CalonSiswaService {

    private CalonSiswaRepository calonSiswaRepository;

//    @Override
//    public void createCalonSiswa(CalonSiswaCreateRequestDTO dto) {
//        CalonSiswa calonSiswa = new CalonSiswa();
//        calonSiswa.setName(dto.get());
//        calonSiswa.setNamaAyah(dto.getNamaAyah());
//        calonSiswa.setNoTelephone(dto.getNoTelephone());
//        calonSiswa.setPassword(dto.getPassword());
//        calonSiswa.setEmail(dto.getEmail());
//        calonSiswa.setCreatedAt(LocalDateTime.now());
//        calonSiswa.setUpdatedAt(LocalDateTime.now());
//
//        calonSiswaRepository.save(calonSiswa);
//    }
}
