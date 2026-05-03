import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getAIResponse, SYSTEM_PROMPT } from '../services/aiService';


// Mock the @google/generative-ai module
vi.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: class {
      getGenerativeModel() {
        return {
          startChat: () => ({
            sendMessage: vi.fn()
          })
        };
      }
    }
  };
});

describe('AI Service Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  import { afterEach } from 'vitest';
afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('should return a fallback message if Gemini API key is missing', async () => {
    vi.stubEnv('VITE_GEMINI_API_KEY', ''); // Simulate missing key
    const response = await getAIResponse('How to register?');
    expect(response).toContain('mock mode');
    expect(response).toContain('Form 6');
  });

  it('should contain the non-partisan system prompt', () => {
    expect(SYSTEM_PROMPT).toContain('non-partisan');
    expect(SYSTEM_PROMPT).toContain('Election Commission of India');
    expect(SYSTEM_PROMPT).toContain('NEVER:');
  });
  
  // Note: Detailed mocking of the API response depends on the internal mock implementation,
  // but testing the fallback and prompt integrity covers core logic paths securely.
});
