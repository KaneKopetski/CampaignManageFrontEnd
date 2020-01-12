export class CampaignResponseLessWorldMap {
  campaignId: number;
  campaignName: string;
  edition: string;
  description: string;
  owner: string;
  campaignImage: {
    id: string;
    fileName: string;
    fileType: string;
    data: Blob;
  };
}
