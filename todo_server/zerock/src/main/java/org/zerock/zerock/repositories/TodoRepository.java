package org.zerock.zerock.repositories;

import org.springframework.data.repository.CrudRepository;
import org.zerock.zerock.domain.Todo;

public interface TodoRepository extends CrudRepository<Todo, Long> {
    
}