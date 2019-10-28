import { FilterPipe } from './filter-pipe.pipe';

describe('FilterPipePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    const persons = [{'firstName':'Venkatesh','lastName': 'Gorkal'}];
    expect(pipe.transform(persons,'firstName','lastName','ve')).toBeDefined();
  });
});
