import { TestBed } from '@angular/core/testing';

import { LikedPostsService } from './liked-posts.service';

describe('LikedPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LikedPostsService = TestBed.get(LikedPostsService);
    expect(service).toBeTruthy();
  });
});
