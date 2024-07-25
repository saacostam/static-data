import { mkdir } from 'fs/promises';

export async function createDirectories(filePath: string): Promise<void> {
  try {
    console.log(
      `[Create Directories]: Creating directory with following path: ${filePath}`,
    );
    await mkdir(filePath, { recursive: true });
  } catch (error) {
    console.error(
      `[Create Directories]: Error creating directories for ${filePath}:`,
      error,
    );
  }
}
