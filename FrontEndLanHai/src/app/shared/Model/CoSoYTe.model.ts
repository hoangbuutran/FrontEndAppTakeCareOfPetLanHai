export class CoSoYTeModel {
    IdCoSoThuY: number;
    TenCoSoThuY: string;
    DiaDiem: string;
    SDT: string;
    Email: string;
    TrangThai: boolean;
    IdTaiKhoan: number;
    NguoiDungs:
        {
            IdNguoiDung: number;
            TenNguoiDung: string;
            DiaChi: string;
            NgaySinh: string;
            SDT: string;
            Email: string;
            TrangThai: true,
            HinhAnh: string;
            IdCoSoYTe: 1,
            IdTaiKhoan: 1,
        };
}
