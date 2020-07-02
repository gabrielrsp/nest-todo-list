import { TaskService } from './shared/task.service';
import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';

@Module({
    controllers: [TasksController],
    providers: [TaskService]
})
export class TasksModule {}
