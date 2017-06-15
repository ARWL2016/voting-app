import {  PipeTransform, Pipe } from '@angular/core';
import { Topic } from '../models/topic';

@Pipe({
    name: 'topicFilter'
})
export class TopicFilterPipe implements PipeTransform {

    transform(value: Topic[], filterBy: string): Topic[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((topic: Topic) =>
            topic.topicTitle.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}