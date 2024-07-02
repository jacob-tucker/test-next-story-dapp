export const registerExistingNftDerivative = `
import { Address, toHex } from 'viem';
import { useIpAsset } from "react-sdk57";

export default function RegisterDerivative() {
  const { register, registerDerivativeWithLicenseTokens } = useIpAsset();

  const tokenId: string = ...
  const licenseId: string = ...
  const nftContract: Address = "0xe8E8dd120b067ba86cf82B711cC4Ca9F22C89EDc";

  const registerResponse = await register({
    nftContract,
    tokenId,
    metadata: {
      metadataURI: 'test-uri', // uri of IP metadata
      metadataHash: toHex('test-metadata-hash', { size: 32 }), // hash of IP metadata
      nftMetadataHash: toHex('test-nft-metadata-hash', { size: 32 }), // hash of NFT metadata
    },
    txOptions: { waitForTransaction: true }
  });
  console.log(\`IPA created at tx hash \${registerResponse.txHash}, IPA ID: \${registerResponse.ipId}\`);

  const registerDerivativeResponse = await registerDerivativeWithLicenseTokens({
    childIpId: registerResponse.ipId as Address,
    licenseTokenIds: [licenseId],
    txOptions: { waitForTransaction: true }
  });
  console.log(\`IPA registered as derivative at tx hash \${registerDerivativeResponse.txHash}\`);
}
`;
