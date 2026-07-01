package com.library.service;
import com.library.repository.BookRepository;

public class BookService {
    
    private BookRepository repository;

    public BookService(){

    }

    public void setRepository(BookRepository repository){
        this.repository=repository;
    }

    public void services(){
        System.out.println("Processing the book request...");
        repository.getTitle();
        System.out.println("Book issued successfully");
    }


}
