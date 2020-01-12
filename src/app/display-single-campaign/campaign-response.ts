export class CampaignResponse {
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
  worldMap: {
    id: string;
    fileName: string;
    fileType: string;
    data: Blob;
  };
}
