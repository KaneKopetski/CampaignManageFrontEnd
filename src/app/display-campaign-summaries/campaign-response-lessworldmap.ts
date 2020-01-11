export class CampaignResponseLessWorldMap {
  campaignId: number;
  campaignName: string;
  edition: number;
  description: string;
  owner: string;
  campaignImage: {
    id: string;
    fileName: string;
    fileType: string;
    data: Blob;
  };
}
