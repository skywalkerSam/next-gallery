/**
 * Represents an image entity with its metadata.
 * @property {number} id - Unique identifier for the image
 * @property {string} name - Name of the image file
 * @property {string} url - URL where the image is stored
 * @property {string} userId - ID of the user who uploaded the image
 * @property {Date} createdAt - Timestamp when the image was created
 * @property {Date | null} updatedAt - Timestamp when the image was last updated
 */
export type ImageType = {
  id: number;
  name: string;
  url: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date | null;
};
