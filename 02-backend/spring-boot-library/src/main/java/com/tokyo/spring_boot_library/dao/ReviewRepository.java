package com.tokyo.spring_boot_library.dao;

import com.tokyo.spring_boot_library.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    
}
