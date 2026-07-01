package com.library.service;
import com.library.repository.BookRepository;

public class BookService {
    
    private BookRepository repository;

    public BookService(BookRepository repository){
        this.repository=repository;
    }

    public void services(){
        System.out.println("Book service created");
        repository.getTitle();
    }


}
