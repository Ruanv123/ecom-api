import { Test, TestingModule } from '@nestjs/testing';
import { TweetsService } from './tweets.service';

describe('TweetsService', () => {
  let service: TweetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TweetsService],
    }).compile();

    service = module.get<TweetsService>(TweetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createTweet', () => {
    it('should create tweet', () => {
      service.tweets = [];
      const payload = 'this is my tweet';

      const tweet = service.createTweet(payload);

      expect(tweet).toBe(payload);
      expect(service.tweets).toHaveLength(1);
    });
    it('should prevent tweets created wich are over 100 characters', () => {
      const payload =
        'This is a long tweet over 100 characters This is a long tweet over 100 characters This is a long t...';

      const tweet = () => {
        return service.createTweet(payload);
      };

      // Assert
      expect(tweet).toThrowError();
    });
  });
});
